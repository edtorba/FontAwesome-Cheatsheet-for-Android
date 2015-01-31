Font Awesome Cheatsheet for Android
==================================

The complete Font Awesome 4.3.0 icon reference for Android.

**How to use:**
- Upload `fontawesome.xml` to `res/values` folder.
- Set text on any of your element: `<button android:id="@+id/FOO" ... android:text="@fontawesome/fa_glass" ... />`
- Load `.ttf` font and set typeface

**How to set typeface:**
- Upload fontawesome `.ttf` font file to assets folder

```
Typeface font = Typeface.createFromAsset( getAssets(), "fontawesome-webfont.ttf" );
...
Button button = (Button)findViewById( R.id.FOO );
button.setTypeface(font);
```

**OR**

Better font loading techniques for android [here](https://code.google.com/p/android/issues/detail?id=9904#c7)


[Font Awesome](http://fontawesome.io/)

Thanks to [@sergiopantoja](https://github.com/sergiopantoja) for updating to 4.3.0 version.
