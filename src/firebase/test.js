import firebase from 'firebase/app';
import 'firebase/firestore';
import { firestore } from './firebase.utils';

const firebase = firebase.firestore();

firestore
  .collection('users')
  .doc('ry6OfogKJFLoreG1CxbZ')
  .collection('cartItems')
  .doc('I1PUk1p99XUwJkJ5w92J');

firestore.doc('/users/ry6OfogKJFLoreG1CxbZ/cartItems/I1PUk1p99XUwJkJ5w92J');
firestore.collection('/users/ry6OfogKJFLoreG1CxbZ/cartItems');
