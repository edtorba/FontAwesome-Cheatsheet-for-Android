FontAwesome-Cheatsheet-for-Android
==================================

The complete Font Awesome 4.0.3 icon reference for Android.

**Upload fontawesome.xml to "res/values" folder**

**Usage:**

    <Button
    android:id="@+id/button1"
    ...
    android:text="@fontawesome/fa_glass"
    ... />

**PS.**

Don't forget to load .ttf font and set typeface.

    Typeface font = Typeface.createFromAsset( getAssets(), "fontawesome-webfont.ttf" );
    ...
    Button button = (Button)findViewById( R.id.button1 );
    button.setTypeface(font);

For better font loading techniques check out this link: https://code.google.com/p/android/issues/detail?id=9904#c7

[FontAwesome][1]
  [1]: http://fortawesome.github.io/Font-Awesome/
