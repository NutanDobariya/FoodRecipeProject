import Loading from '../spinners/Loading';
import React, { useState, createRef} from 'react';
import {View, Text} from 'react-native';
import Colors from '../../theme/Colors';
import {dimens} from '../../constants/dimens';
import {getFontSize} from '../../theme/Responsive';
import DelayInput from 'react-native-debounce-input';

const TextField = ({
  label,
  style = {},
  inputStyle = {},
  errorText,
  icon,
  placeholder,
  onChangeText,
  mask,
  debounce = 0,
  loading,
  suffix,
  isNumber = false,
  floatingLabel = false,
  ...props
}) => {
  const [value, setValue] = useState(props.value ?? '');
  const inputRef = createRef();

  return (
    <View style={[styles.wrapper, style]}>
      <View
        style={[
          styles.container,
          errorText ? {borderColor: Colors.red} : null,
          props.editable === false ? {backgroundColor: Colors.white} : null,
        ]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {(loading || icon) && (
            <View
              style={{
                width: dimens.w8,
                height: dimens.w8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {loading ? <Loading size="small" /> : icon}
            </View>
          )}

          <View style={styles.formGroup}>
            {floatingLabel && value.length > 0 && (
              <Text style={styles.label}>{label}</Text>
            )}

            {mask && (
              <DelayInput
                value={value}
                minLength={2}
                inputRef={inputRef}
                onChangeText={onChangeText}
                delayTimeout={500}
                placeholder={label}
                placeholderTextColor={Colors.grey}
                style={[inputStyle, styles.input]}
              />
            )}

            {!mask && (
              <DelayInput
                value={value}
                minLength={2}
                inputRef={inputRef}
                onChangeText={onChangeText}
                delayTimeout={500}
                placeholder={label}
                placeholderTextColor={Colors.grey}
                style={[inputStyle, styles.input]}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = {
  wrapper: {
    paddingBottom: dimens.h1,
  },
  container: {
    paddingHorizontal: dimens.w1,
    borderColor: Colors.grey,
    borderWidth: dimens.wo3,
    borderRadius: dimens.w6,
    height: dimens.h5,
  },
  formGroup: {
    flex: 1,
    height: dimens.h5,
    justifyContent: 'center',
  },
  label: {
    fontFamily: 'Roboto-Medium',
    fontSize: getFontSize(14),
    color: Colors.grey,
  },
  input: {
    fontFamily: 'Roboto-Medium',
    flex: 1,
    fontSize: getFontSize(14),
    margin: 0,
    padding: 0,
    color: Colors.greyDark,
  },
  errorText: {
    fontFamily: 'Roboto-Medium',
    color: Colors.red,
    alignSelf: 'flex-end',
    marginTop: 4,
    fontSize: 12,
  },
};

export default TextField;
