import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from './style';


function MaterialButtonShare(props) {
  return (
    <TouchableOpacity style={[styles.containerButton, props.style]}>
      <Icon name="share-variant" style={styles.icon}></Icon>
    </TouchableOpacity>
  );
}


export default MaterialButtonShare;
