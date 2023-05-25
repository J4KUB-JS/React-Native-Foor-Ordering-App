Git hub repo [link](https://github.com/J4KUB-JS/React-Native-Foor-Ordering-App)

# Food ordering app (React Native & Firebase)

### Application set up

---

To start app run following commands

- npm install: to install packages
- npm start: to start application and generated QR code

### Application preview

---

To preview application you can ether download expo app available for iOS and Android or use emulators like android studio or xcode.

1. Expo app

- iOS: code scan QR code via camera app. It will redirect you to expo app to build app there
- Android: scan code via expo app and it will build there

PS. if app does not build in app close it and scanning code again

2. Emulator

- Xcode: open simulator app that is located under "/Applications/Xcode/Contents/Developer/Applications" path. This will launch iOS device emulator then after running npm start pres "i" in terminal where localhost is running

- Android Studio: open android studio create new device to emulate start it by pressing play button run npm start in terminal and press "a" in terminal where localhost is running

### Project Description

---

This project was created by using stack of React Native with TypeScript, react-navigation library to provide functionality of navigating, Redux with Redux Tool-Kit for holding internal state of application and FireBase for storing data like categories and menu items

- Tab Bar: Have 3 views to select from:
  - Menu with all the item and other crucial actions
  - Categories where all items are grouped bu category
  - Cart where we can see selected products after adding item to cart red indicator will pop up next to cart icon with count of items in cart
- Menu Screen:
  - Search box: Allows for quick search for users that know what they want to order. It also contains icon that has action to clear input
  - Category filter: quick filter contained in horizontal scrolling list with all categories
  - Menu card: each item has its own card with price label, ingredients inside, and action to add or remove item from cart with counter of selected item
- Categories Screen: Each category has its own drop down wrapper that contains simple menu cards with price and action buttons wrapped into horizontal scrolling list
- Cart Screen:
  - Empty state: if we go to cart with out any item inside we will see empty view with icons and text indication
  - Items in cart: cart item card contains only important information such as price name and actions with count indicator
  - Summary cart with action: here user can see summary of his order with information about any additional costs like Service Fee or Delivery Fee
