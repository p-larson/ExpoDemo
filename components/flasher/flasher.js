import React from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import Toast from "react-native-toast-message";
import styles from "./styles";

function FlashBox({
  isVisible,
  bg,
  hide,
  onPress,
  text1: message,
  text2: header,
}) {

  if (!isVisible) {
    return null;
  }

  return (
    <View style={[styles.flashBox, bg]}>
      <TouchableOpacity onPress={onPress} style={{ flex: 1, marginLeft: 10 }}>
        {header && (
          <Text sm bold white>
            {header}
          </Text>
        )}
        <Text body micro white>
          {message}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ok} onPress={hide || Toast.hide}>
        <Text body micro white>
          OK
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function SuccessFlash(params) {
  return <FlashBox bg={styles.success} {...params} />;
}

function WarningFlash(params) {
  return <FlashBox bg={styles.warning} {...params} />;
}

function ErrorFlash(params) {
  return <FlashBox bg={styles.error} {...params} />;
}

function InfoFlash(params) {
  return <FlashBox bg={styles.info} {...params} />;
}

const showConfig = {
  autoHide: true,
  visibilityTime: 3000,
};

const config = {
  success: SuccessFlash,
  warning: WarningFlash,
  error: ErrorFlash,
  info: InfoFlash,
};

function flash(kind, params, showParams) {
  let text1;
  let text2 = null;
  if (typeof params === "string") {
    text1 = params;
    params = { msg: params };
  } else {
    text1 = params.msg;
    text2 = params.header;
  }
  showParams = { ...showConfig, ...showParams };

  return Toast.show({
    type: kind,
    text1,
    text2,
    ...showParams,
    props: { ...params },
  });
}
export default function Flasher() {
  return <Toast config={ config } />;
}

Flasher.flash = flash;
Flasher.show = flash;
Flasher.hide = Toast.hide;
Flasher.success = flash.bind(this, "success");
Flasher.warning = flash.bind(this, "warning");
Flasher.error = flash.bind(this, "error");
Flasher.info = flash.bind(this, "info");
