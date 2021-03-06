import React, {useEffect, useState, useContext} from 'react';
import {
  SafeAreaView,
  useColorScheme,
  View,
  FlatList,
  Linking,
  ScrollView,
  LogBox,
  VirtualizedList,
} from 'react-native';

import {getNews, getNewsLang} from '../../news';
import {TextInput, Button} from 'react-native-paper';
import Article from '../../components/article/Article';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import SwitchSelector from 'react-native-switch-selector';
import i18next from 'i18next';
import {useTranslation} from 'react-i18next';
import '../../translations/i18nManager';

import {optionsAr, options} from '../../utils';

// const options = [
//   {label: 'English', value: 'en'},
//   {label: 'Arabic', value: 'ar'},
// ];

// const optionsAr = [
//   {label: 'إنجليزي', value: 'en'},
//   {label: 'عربي', value: 'ar'},
// ];

const darkTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1A1A1A',
    accent: '#FAFAFA',
  },
};

const lightTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FAFAFA',
    accent: '#1A1A1A',
  },
};

const App = () => {
  const [articles, setArticles] = useState<any>([]);
  const [refreshing, setRefreshing] = useState<boolean>(true);
  const [masterData, setmasterData] = useState<Array<string>>([]);
  const [searchValue, setsearchValue] = useState<string>('');

  const [lang, setLang] = useState('en');

  const scheme = useColorScheme();

  global.language = lang;

  const {t} = useTranslation();
  const direction = i18next.language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    fetchNews();
  }, [refreshing]);

  const fetchNews = () => {
    if (lang == 'en') {
      getNews()
        .then((articles: any) => {
          setArticles(articles), setRefreshing(false), setmasterData(articles);
        })
        .catch(() => setRefreshing(false));
    } else {
      getNewsLang()
        .then((articles: any) => {
          setArticles(articles), setRefreshing(false), setmasterData(articles);
        })
        .catch(() => setRefreshing(false));
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    () => fetchNews();
  };

  const searchData = (text: string) => {
    const oldData = masterData;

    if (!text) {
      setArticles(oldData);
    } else {
      const updatedData = articles.filter((item: any) => {
        const itemData = `${item.title.toUpperCase()})`;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setArticles(updatedData);
      setsearchValue(text);
    }
  };

  const langSelector = (value: string) => {
    setLang(value);
    global.language = value;
    i18next.changeLanguage(value);
    console.log('the lang', i18next.language);
    handleRefresh();
  };

  return (
    <PaperProvider theme={scheme === 'dark' ? darkTheme : lightTheme}>
      {scheme === 'dark' ? (
        <SafeAreaView style={{backgroundColor: '#202020', flex: 1}}>
          <View style={{backgroundColor: '#202020'}}>
            <SwitchSelector
              options={direction === 'ltr' ? options : optionsAr}
              hasPadding
              initial={0}
              onPress={(value: any) => langSelector(value)}
              buttonColor={'#c62460'}
              style={{
                margin: 5,
                borderRadius: 50,
                borderTopStartRadius: 50,
                borderBottomStartRadius: 50,
                borderTopEndRadius: 50,
              }}
            />
            <TextInput
              placeholder={t('search')}
              value={searchValue}
              onChangeText={text => searchData(text)}
              style={{
                margin: 5,
                borderRadius: 50,
                borderTopStartRadius: 50,
                borderBottomStartRadius: 50,
                borderTopEndRadius: 50,
                height: 45,
                textAlign: direction === 'ltr' ? 'left' : 'right',
              }}
            />
            {/* <ScrollView> */}
            <FlatList
              data={articles}
              renderItem={({item}) => <Article article={item} />}
              keyExtractor={(item: any) => item.url}
              refreshing={refreshing}
              onRefresh={handleRefresh.bind(this)}
              scrollEnabled={true}
            />
            {/* </ScrollView> */}
          </View>
        </SafeAreaView>
      ) : (
        <SafeAreaView style={{backgroundColor: '#FAF9F6', flex: 1}}>
          <View style={{backgroundColor: '#FAF9F6'}}>
            <SwitchSelector
              options={direction === 'ltr' ? options : optionsAr}
              hasPadding
              initial={0}
              onPress={(value: any) => langSelector(value)}
              buttonColor={'#c62460'}
              style={{
                margin: 5,
                borderRadius: 50,
                borderTopStartRadius: 50,
                borderBottomStartRadius: 50,
                borderTopEndRadius: 50,
              }}
            />
            <TextInput
              placeholder={t('search')}
              value={searchValue}
              onChangeText={text => searchData(text)}
              style={{
                margin: 5,
                borderRadius: 50,
                borderTopStartRadius: 50,
                borderBottomStartRadius: 50,
                borderTopEndRadius: 50,
                height: 45,
                textAlign: direction === 'ltr' ? 'left' : 'right',
              }}
            />
            {/* <ScrollView> */}
            <FlatList
              data={articles}
              renderItem={({item}) => <Article article={item} />}
              keyExtractor={(item: any) => item.url}
              refreshing={refreshing}
              onRefresh={handleRefresh.bind(this)}
              scrollEnabled={true}
            />
            {/* </ScrollView> */}
          </View>
        </SafeAreaView>
      )}
    </PaperProvider>
  );
};

export default App;
