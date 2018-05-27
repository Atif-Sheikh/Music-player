import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Player from './components/player';

export const TRACKS = [
  {
    title: 'Stressed Out',
    artist: 'Twenty One Pilots',
    albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
    audioUrl: "http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3",
  },
  {
    title: 'Love Yourself',
    artist: 'Justin Bieber',
    albumArtUrl: "http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg",
    audioUrl: 'http://oranslectio.files.wordpress.com/2013/12/39-15-mozart_-adagio-fugue-in-c-minor-k-546.mp3',
  },
  {
    title: 'Hotline Bling',
    artist: 'Drake',
    albumArtUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png',
    audioUrl: 'http://russprince.com/hobbies/files/13%20Beethoven%20-%20Fur%20Elise.mp3',
  },
];

export default class App extends Component {
  render() {
    return <Player tracks={TRACKS} />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(4,4,4)',
  },
});
