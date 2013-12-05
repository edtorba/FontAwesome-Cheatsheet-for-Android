FontAwesome-Cheatsheet-for-Android
==================================

The complete Font Awesome 4.0.3 icon reference for Android.

Copy entries from strings.xml to your strings.xml

**Usage:**

    <Button
    android:id="@+id/button1"
    ...
    android:text="@string/fa-glass"
    ... />

**PS.**

Don't forget to load .ttf font and set typeface.

    Typeface font = Typeface.createFromAsset( getAssets(), "fontawesome-webfont.ttf" );
    ...
    Button button = (Button)findViewById( R.id.button1 );
    button.setTypeface(font);
    
For better font loading techniques check out this link: https://code.google.com/p/android/issues/detail?id=9904#c7
