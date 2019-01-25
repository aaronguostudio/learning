import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';

void main () => runApp(MyApp());

// Stateless
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext contex) {
    // final wordPair = WordPair.random();
    return MaterialApp(
      title: 'Welcome to Flutter',
      home: RandomWords()
      // home: Scaffold(
        // appBar: AppBar(
        //   title: Text('Hey My Android APP'),
        // ),
        // body: Center(
        //   // child: Text(wordPair.asPascalCase),
        //   child: RandomWords()
        // )
      // )
    );
  }
}

// Stateful
class RandomWordsState extends State<RandomWords> {
  // private
  final _suggestions = <WordPair>[];
  final _biggerFont = const TextStyle(fontSize: 18.0);
  @override
  Widget build(BuildContext context) {
    // final wordPair = WordPair.random();
    // return Text(wordPair.asPascalCase);
    return Scaffold(
      appBar: AppBar(
        title: Text('Startup Name Generator')
      ),
      body: _buildSuggestions()
    );
  }

  Widget _buildSuggestions() {
    return ListView.builder(
      padding: const EdgeInsets.all(16.0),
      itemBuilder: (context, i) {
        if (i.isOdd) return Divider();

        final index = i ~/ 2;
        if (index >= _suggestions.length) {
          _suggestions.addAll(generateWordPairs().take(10));
        }
        return _buildRow(_suggestions[index]);
      },
    );
  }

  Widget _buildRow(WordPair pair) {
    return ListTile(
      title: Text(
        pair.asPascalCase,
        style: _biggerFont,
      )
    );
  }
}

class RandomWords extends StatefulWidget {
  @override
  RandomWordsState createState() => new RandomWordsState();
}