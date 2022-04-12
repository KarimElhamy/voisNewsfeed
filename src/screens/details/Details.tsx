import {
  View,
  Linking,
  TouchableOpacity,
  useColorScheme,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {Text, Card} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import React, {useEffect, useState} from 'react';
import styles from './Details.style';

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

type ItemProps = {
  route: {
    params: {
      item: Info;
    };
  };
};

export type Info = {
  itemAuthor?: string;
  itemImage?: URL;
  itemTitle?: string;
  itemDate?: string;
  itemUrl?: URL;
  itemDesc?: string;
};

export const Details: React.FC<ItemProps> = ({route}) => {
  const {itemImage, itemTitle, itemAuthor, itemDate, itemUrl, itemDesc} =
    route.params.item;
  const {noteStyle, card, mediaContainer, cardTitle, cardTitleTextContainer} =
    styles;
  const scheme = useColorScheme();
  const navigation = useNavigation();

  return (
    <PaperProvider theme={scheme === 'dark' ? darkTheme : lightTheme}>
      {scheme === 'dark' ? (
        <ScrollView style={{backgroundColor: '#202020'}}>
          <SafeAreaView style={{padding: 10, backgroundColor: '#202020'}}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#202020',
              }}>
              <Card
                containerStyle={[
                  card,
                  {
                    maxHeight: '90%',
                    maxWidth: '90%',
                    borderWidth: 3,
                    borderColor: 'white',
                    shadowOffset: {width: 4, height: 4},
                    shadowRadius: 10,
                    shadowColor: '#FAF9F6',
                    backgroundColor: '#353535',
                    margin: '5%',
                  },
                ]}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                  {!!itemTitle && (
                    <Text
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        paddingRight: 16,
                        paddingLeft: 16,
                        paddingBottom: 16,
                        paddingTop: 16,
                        fontWeight: '800',
                        fontSize: 25,
                        color: 'white',
                      }}>
                      {itemTitle}
                    </Text>
                  )}

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    {!!itemAuthor && (
                      <Text style={[noteStyle, {color: 'white'}]}>
                        {'Author: ' + itemAuthor}
                      </Text>
                    )}
                    {!!itemDate && (
                      <Text style={[noteStyle, {color: 'white'}]}>
                        {'Published: ' + itemDate}
                      </Text>
                    )}
                  </View>
                  <View style={mediaContainer}>
                    {!!itemImage && (
                      <Card.Image
                        style={[
                          mediaContainer,
                          {
                            borderWidth: 3,
                            borderColor: 'white',
                          },
                        ]}
                        source={{uri: `${itemImage}`}}
                      />
                    )}

                    <Text style={{color: 'white'}}>{itemDesc + '\n'}</Text>
                    {global.language === 'ar' ? (
                      <Text
                        style={{
                          textAlign: 'right',
                          color: 'white',
                          fontWeight: 'bold',
                        }}
                        onPress={() => Linking.openURL(`${itemUrl}`)}>
                        {'لقراءة المزيد، انقر هنا...'}
                      </Text>
                    ) : (
                      <Text
                        style={{color: 'white', fontWeight: 'bold'}}
                        onPress={() => Linking.openURL(`${itemUrl}`)}>
                        {'To Read more, click here...'}
                      </Text>
                    )}
                  </View>
                </View>
              </Card>

              <TouchableOpacity onPress={() => navigation.goBack()}>
                {global.language === 'en' ? (
                  <Text
                    style={{
                      alignContent: 'flex-start',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 15,
                      textAlign: 'right',
                      alignSelf: 'flex-start',
                      marginTop: 30,
                    }}>
                    Return to the Newsfeed
                  </Text>
                ) : (
                  <Text
                    style={{
                      alignContent: 'flex-start',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 15,
                      textAlign: 'right',
                      alignSelf: 'flex-start',
                      marginTop: 30,
                    }}>
                    العودة إلى الأخبار
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ScrollView>
      ) : (
        <ScrollView style={{backgroundColor: 'white'}}>
          <SafeAreaView style={{backgroundColor: 'white'}}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
              }}>
              <TouchableOpacity
                style={{alignContent: 'center'}}
                onPress={() => navigation.goBack()}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>Back</Text>
              </TouchableOpacity>
              <Card
                containerStyle={[
                  card,
                  {
                    borderWidth: 3,
                    borderColor: '#202020',
                    shadowOffset: {width: 7, height: 7},
                    shadowOpacity: 50,
                    shadowRadius: 10,
                    backgroundColor: 'white',
                    margin: '5%',
                  },
                ]}>
                <View style={cardTitleTextContainer}>
                  <Text style={[cardTitle, {color: 'black'}]}>{itemTitle}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={noteStyle}>{'Author: ' + itemAuthor}</Text>
                    <Text style={noteStyle}>{'Published: ' + itemDate}</Text>
                  </View>
                  <View style={mediaContainer}>
                    <Card.Image
                      style={mediaContainer}
                      source={{uri: `${itemImage}`}}
                    />
                    <Text style={{color: 'black'}}>{itemDesc + '\n'}</Text>
                    {global.language === 'ar' ? (
                      <Text
                        style={{
                          textAlign: 'right',
                          color: 'black',
                          fontWeight: 'bold',
                        }}
                        onPress={() => Linking.openURL(`${itemUrl}`)}>
                        {'لقراءة المزيد، انقر هنا...'}
                      </Text>
                    ) : (
                      <Text
                        style={{color: 'black', fontWeight: 'bold'}}
                        onPress={() => Linking.openURL(`${itemUrl}`)}>
                        {'To Read more, click here...'}
                      </Text>
                    )}
                  </View>
                </View>
              </Card>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                {global.language === 'en' ? (
                  <Text
                    style={{
                      alignContent: 'flex-start',
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: 15,
                      textAlign: 'right',
                      alignSelf: 'flex-start',
                      marginTop: 30,
                    }}>
                    Return to the Newsfeed
                  </Text>
                ) : (
                  <Text
                    style={{
                      alignContent: 'flex-start',
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: 15,
                      textAlign: 'right',
                      alignSelf: 'flex-start',
                      marginTop: 30,
                    }}>
                    العودة إلى الأخبار
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ScrollView>
      )}
    </PaperProvider>
  );
};
