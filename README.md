# Countries Explorer 🌎

This is a React Native app that allows users to explore information about countries. It fetches country data from the [Restcountries API](https://restcountries.com/) and provides features such as filtering countries by name, displaying high-level overviews, and navigating to detailed information about each country.

Demo: 

## Features

- Display a list of countries with the flags.
- Filter countries as you type in the input field.
- Filter countries by region.
- Navigate to detailed information about each country.

## Technologies Used

- React Native
- TypeScript
- React Navigation

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1 - Clone the repository:

```bash
git clone https://github.com/rodrigo-tavares/countries-explorer
cd countries-explorer
```

2 - Install dependencies:

```bash
npm install
```

3 - Running the App

#### Expo CLI

If you're using Expo:

```bash
expo start
```

Follow the instructions in the console to open the app on an emulator or a physical device.

#### React Native CLI

If you're using the React Native CLI:

```bash
react-native run-android

# or

react-native run-ios
```

Make sure to have the required setup for Android or iOS development.

## Project structure

```text
src/
|- index.js _______________________________ # Application entry
|- App.tsx _________________________________ # Application init
|  |- components/: Reusable React components
|  |- navigation/: Configuration for React Navigation.
|  |- services/: Fetch data API or local JSON
|  |- type/: Models like the Country type.
|  |- screens/: React components representing different screens.
|  |- utils/: Functions to help filter and order the countries list.
```

## Contributing

Feel free to contribute to this project. Submit issues for bugs or feature requests, and create pull requests to propose changes.

## License

This project is licensed under the MIT License.
