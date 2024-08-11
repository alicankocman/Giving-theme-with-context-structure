# React Tema Yönetimi ile `ThemeContextProvider`

Bu belgede, React uygulamanızda temayı yönetmek için kullanılan `ThemeContextProvider` bileşenini açıklayacağız. Tema yönetimi, kullanıcı arayüzünüzün görünümünü dinamik olarak değiştirmek için kullanılır.

## 1. `ThemeContext` Oluşturma

Tema bilgilerini paylaşmak için `ThemeContext` oluşturulur:

## 2.'ThemeContextProvider' Bileşeni

'ThemeContextProvider', temayı yönetir ve tüm alt bileşenlere sağlar:
Tema Yönetimi: themeName ve handleTheme fonksiyonları ile temayı değiştirir ve tarayıcıda saklarız.
İlk Yükleme: useEffect, bileşen yüklendiğinde mevcut temayı kontrol eder ve uygulamada uygular.

## 3.Kullanım

ThemeContextProvider bileşenini uygulamanızın en üst seviyesinde sarmalayarak tema bilgilerini tüm alt bileşenlere sağlar:

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeContextProvider } from './context/ContextTheme';

ReactDOM.render(
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>,
    document.getElementById('root')
);

## 4. Sonuç
   Bu yöntem, kullanıcıların uygulama temasını kolayca yönetmelerine ve tercihlerinin tarayıcıda saklanmasına olanak tanır. Böylece kullanıcı deneyimi daha kişiselleştirilmiş hale gelir.
