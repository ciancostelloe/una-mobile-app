
import {Appearance} from 'react-native';

const themeDark = {
    dark: true,
    iosBarStyle: 'light-content',
    colors: {
        primary: '#333737',
        textOnPrimary: '#F1A943',
        background: '#edf1f7',
        text: '#595959',
        drawerBackground: '#edf1f7',
        drawerText: '#1890ff',
        statusBar: '#333737',
        activityIndicator: '#f3f4f5',
    }
};
const themeLight = {
    dark: false,
    iosBarStyle: 'light-content',
    colors: {
        primary: '#333737',
        textOnPrimary: '#F1A943',
        background: '#edf1f7',
        text: '#595959',
        drawerBackground: '#edf1f7',
        drawerText: '#1890ff',
        statusBar: '#333737',
        activityIndicator: '#f3f4f5',
    }
};

function useTheme (s) {
    var colorScheme = Appearance.getColorScheme();
    var a = s.split('.'),
        ret = 'dark' === colorScheme ? themeDark : themeLight,
        i = 0;        
    for (; i < a.length ; i++) {
        if ('undefined' !== typeof(ret[a[i]]))
            ret = ret[a[i]];
    }
    return ret;
}

export {themeDark, themeLight, useTheme};
