//rfne -> google react native snippets
import {
  View,
  Pressable,
  useColorScheme,
  StyleSheet,
  Linking,
} from 'react-native';
import {Text, Card, Divider, Image} from 'react-native-elements';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

import styles from './Article.style';

import {
  Button,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import React from 'react';

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

const Article = (props: {
  article: {
    title: string;
    description: string;
    publishedAt: string;
    source: any;
    urlToImage: URL;
    url: URL;
    content: string;
    author: string;
  };
}) => {
  const {
    title,
    description,
    publishedAt,
    source,
    urlToImage,
    url,
    content,
    author,
  } = props.article;

  const {noteStyle} = styles;
  const time = moment(publishedAt || moment.now()).fromNow();

  const scheme = useColorScheme();

  const navigation = useNavigation();

  return (
    <PaperProvider theme={scheme === 'dark' ? darkTheme : lightTheme}>
      <View>
        <Pressable
          onPress={() => {
            navigation.navigate('Details', {
              item: {
                itemDesc: description,
                itemImage: urlToImage,
                itemTitle: title,
                itemAuthor: author,
                itemDate: time,
                itemUrl: url,
              },
            });
          }}>
          {scheme === 'dark' ? (
            <Card
              containerStyle={{
                borderWidth: 2,
                borderRadius: 50,
                backgroundColor: '#202020',
              }}>
              <Card.Image
                style={{borderRadius: 50}}
                source={{uri: `${urlToImage}`}}
              />
              <Text style={{color: 'white', marginBottom: 10}}>
                {title || 'Read More..'}
              </Text>
              <Divider style={{backgroundColor: '#dfe6e9'}} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={noteStyle}>{source.name.toUpperCase()}</Text>
                <Text style={noteStyle}>{time}</Text>
              </View>
            </Card>
          ) : (
            <Card
              containerStyle={{
                borderWidth: 5,
                borderRadius: 50,
                backgroundColor: 'white',
              }}>
              <Card.Image
                style={{borderRadius: 50}}
                source={{uri: `${urlToImage}`}}
              />
              <Text style={{color: 'black', marginBottom: 10}}>
                {title || 'Read More..'}
              </Text>
              <Divider style={{backgroundColor: '#dfe6e9'}} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={noteStyle}>{source.name.toUpperCase()}</Text>
                <Text style={noteStyle}>{time}</Text>
              </View>
            </Card>
          )}
        </Pressable>
      </View>
    </PaperProvider>
  );
};

export default Article;
