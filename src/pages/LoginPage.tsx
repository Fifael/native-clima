import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import * as Location from 'expo-location'
import Sun from '../assets/icons/sun.jsx';
import Wind from '../assets/icons/wind.jsx';
import Ice from '../assets/icons/ice.jsx';
import SunStaticIcon from '../assets/icons/sunStaticIcon.jsx';
import Clouds from '../assets/icons/clouds.jsx';
import Rain from '../assets/icons/rain.jsx';

const LoginPage = () => {
  const [currentTemperature, setCurrentTemperature] = useState('25')
  const [locationCoords, setLocationCoords] = useState(null);
  const [locationName, setLocationName] = useState('Brasil, Fortaleza')
  const [condition, setCondition] = useState('Ensolarado')
  const [temperatureMin, setTemperatureMin] = useState(12)
  const [temperatureMax, setTemperatureMax] = useState(42)
  const [wind, setWind] = useState(0)
  const [weatherIcon, setWeatherIcon] = useState(<Sun />)
  const [backgroundWeather, setBackgroundWeather] = useState('bg-gradient-to-b from-blue-400 to-blue-950')
  const [backgroundWeatherInfo, setBackgroundWeatherInfo] = useState('bg-blue-950')

  async function getLocation(){
    let { status } = await Location.requestForegroundPermissionsAsync()
    console.log(status)
      if (status !== 'granted') {
      }else{
        let location = await Location.getCurrentPositionAsync({})
        await setLocationCoords(location.coords)
      }
  }

  async function setCurrentWeather(){
    getLocation()
    const data = await fetchWeatherData(locationCoords)

    setCurrentTemperature(convertKelvinToC(data.currentTemperature))
    setTemperatureMin(convertKelvinToC(data.temperatureMin))
    setTemperatureMax(convertKelvinToC(data.temperatureMax))
    setLocationName(data.locationName)
    setWind(data.wind)
    setCondition(data.condition)
  }

  const convertKelvinToC = (kelvin) => {
    return parseInt(kelvin - 273)
  }
  
  const fetchWeatherData = async (locationCoords) => {
    console.log(locationCoords)
    try {
      let results
      const response =  await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${locationCoords.latitude}&lon=${locationCoords.longitude}&lang=pt&appid=3defa2f1477637d045d02cd9384f3fc0`)
      .then(function (response){
          const data = response.data     
          const locationName = (data.sys.country + ', ' + ' ' + data.name)
          const temperatureMin = data.main.temp_min
          const temperatureMax = data.main.temp_max
          const wind = data.wind.speed
          const currentTemperature = data.main.temp
          const condition = data.weather[0].description
          const conditionMain = data.weather[0].main

          const sunGroup = ["Clear"];
          const cloudsGroup = ["Clouds"];
          const rainGroup = ["Thunderstorm", "Drizzle", "Rain", "Snow", "Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Ash", "Squall", "Tornado"];
          
          if (sunGroup.includes(conditionMain)) {
            setWeatherIcon(<Sun />);
            setBackgroundWeather('bg-gradient-to-b from-blue-400 to-blue-950')
            setBackgroundWeatherInfo('bg-blue-950')
        } else if (cloudsGroup.includes(conditionMain)) {
            setWeatherIcon(<Clouds />);
            setBackgroundWeather('bg-gradient-to-b from-gray-400 to-gray-950')
            setBackgroundWeatherInfo('bg-gray-950')
        } else if (rainGroup.includes(conditionMain)) {
            setWeatherIcon(<Rain />);
            setBackgroundWeather('bg-gradient-to-b from-gray-400 to-gray-950')
            setBackgroundWeatherInfo('bg-gray-950')
        } else {
            console.log("A condição meteorológica não corresponde a nenhum grupo conhecido.");
        }
          
          results = {currentTemperature, temperatureMin, temperatureMax, locationName, wind, condition}
      })
      .catch(function (error) {
          console.log(error)
      })

      return results
    } catch (error) {
      console.error('Erro ao obter dados de clima:', error);
    }
  };

  useEffect(() => {
    setCurrentWeather()
  }, [])

  return (
    <View className={`flex h-full w-full p-10 justify-between ${backgroundWeather}`}>
      <Button title="Obter Previsão do Tempo da minha localização" onPress={setCurrentWeather} />
      <View className="flex items-center justify-center"><Text className="text-2xl text-white">{locationName}</Text></View>
      <View className="flex items-center just">{weatherIcon}</View>
      <View className="flex flex-col items-center justify-center mb-12">
        <Text className="text-center text-[3.8rem] font-medium text-white">{currentTemperature + "º"}</Text>
        <Text className="text-center text-white text-2xl">{condition.charAt(0).toUpperCase() + condition.slice(1)}</Text>
      </View>
      <View className="flex flex-row w-full gap-3">
        <View className={`flex flex-1 flex-col gap-x-2 items-center justify-center h-28 rounded-2xl ${backgroundWeatherInfo}`}>
          <View><Ice /></View>
          <Text className="text-lg text-white">T. Mínima</Text>
          <Text className="text-lg text-white">{temperatureMin + "º"}</Text> 
        </View>
        <View className={`flex flex-1 flex-col gap-x-2 items-center justify-center h-28 rounded-2xl ${backgroundWeatherInfo}`}>
          <View><SunStaticIcon /></View>
          <Text className="text-lg text-white">T. Máxima</Text>
          <Text className="text-lg text-white">{temperatureMax + "º"}</Text> 
        </View>
        <View className={`flex flex-1 flex-col gap-x-2 items-center justify-center h-28 rounded-2xl ${backgroundWeatherInfo}`}>
          <View><Wind /></View>
          <Text className="text-lg text-white">Vento</Text>
          <Text className="text-lg text-white">{wind + ' km/h'}</Text> 
        </View>
      </View>
    </View>
  );
};

export default LoginPage;
