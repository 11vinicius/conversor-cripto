import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, TextInput, TouchableOpacity } from "react-native";
import { PickerItem } from './components/Picker';
import { api } from './services/api';
import { IPickerItem } from './interfaces/IPickerItem';

export default function Index() {
  const [money, setMoney] = useState<IPickerItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [moneySelected, setMoneySelected] = useState('');
  const [moneyBValor, setMoneyBValor] = useState(0);
  const [valueMoney, setValueMoney] = useState('');
  const [valueConvert, setValueConvert] = useState('');

  const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#101215",
    },
    areaMoeda: {
      backgroundColor: "#FFF",
      width: '90%',
      marginTop: 20,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      padding: 8,
      marginBottom: 1
    },
    titulo: {
      fontSize: 16,
      fontWeight: "500",
      marginBottom: 10,
      paddingLeft: 8,
    },
    areaValor: {
      width: '90%',
      backgroundColor: "#FFF",
      paddingTop: 8,
      paddingBottom: 8,
    },
    input: {
      width: '100%',
      padding: 8,
      fontSize: 18,
    },
    buttonArea: {
      width: '90%',
      backgroundColor: "#fb4b57",
      height: 45,
      alignItems: "center",
      justifyContent: "center",
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8
    },
    buttonText: {
      color: "#FFF",
      fontWeight: 'bold',
      fontSize: 16
    },
    areaResult: {
      width: '90%',
      backgroundColor: "#FFF",
      marginTop: 34,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      padding: 24
    },
    valueConverted: {
      fontSize: 28,
      color: "#101215",
      fontWeight: "bold"
    }
  });


  useEffect(() => {
    async function getData() {
      try {
        const res = await api.get('/all')
        let moedas: IPickerItem[] = []

        Object.keys(res.data).map((key: string) => {
          moedas.push({
            label: key,
            value: key,
            key: key
          })
        })
        setMoney(moedas)
        setMoneySelected(moedas[0].value)
        setLoading(false)
      } catch (error) {
        setLoading(false)
      }
    }
    getData()
  }, [])


  async function converter() {

    if (moneyBValor === 0 || moneySelected === '') {
      return;
    }


    const res = await api.get(`all/${moneySelected}-BRL`)
    let result = (res.data[moneySelected].ask * moneyBValor)
    const converted = result.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    setValueConvert(converted)
    setValueMoney(moneyBValor.toString())
    console.log(converted)
  }


  if (loading) {
    return (
      <View style={style.container}>
        <ActivityIndicator color='#FFF' />
      </View>
    )
  }

  return (
    <View style={style.container}>
      <View style={style.areaMoeda}>
        <Text style={style.titulo}>Selecione uma Moeda</Text>
        <PickerItem
          options={money}
          moneySelected={moneySelected}
          onChange={(value: string) => setMoneySelected(value)}
        />
      </View>

      <View style={style.areaValor}>
        <Text style={style.titulo} >Digite um valor para ser covertido em (R$)</Text>
        <TextInput placeholder='EX: 1.50' style={style.input} keyboardType='numeric' inputMode="numeric" onChangeText={(value) => setMoneyBValor(parseInt(value))} />
      </View>

      <TouchableOpacity style={style.buttonArea} onPress={converter}>
        <Text style={style.buttonText}>Converter</Text>
      </TouchableOpacity>

      {valueConvert !== '' && (
        <View style={style.areaResult}>
          <Text style={style.valueConverted}> {valueMoney} {moneySelected}</Text>
          <Text style={{ fontSize: 18, margin: 8, fontWeight: "500" }}>Corresponde a</Text>
          <Text style={style.valueConverted}>{valueConvert}</Text>
        </View>
      )}

    </View>
  );
}
