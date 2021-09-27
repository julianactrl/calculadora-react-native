import React from 'react';
import { Text, View } from 'react-native';
import { BotonCalculadora } from '../components/BotonCalculadora';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'


export const CalculadoraScreen = () => {

    const { 
        numero,
        numeroAnterior,
        btnDelete,
        btnMultiplicar,
        btnDividir,
        btnSumar,
        btnRestar,
        limpiar,
        armarNumero,
        positivoNegativo,
        calcular 
    } = useCalculadora();

    useEffect(() => {
       SplashScreen.hide();
    }, [])

    return (
        <View style={styles.calculadoraContainer}>
            {(numeroAnterior !== '0')
                && (<Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>)}

            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit
            >{numero}</Text>

            {/* Fila de botones */}
            <View style={styles.fila}>
                {/* Boton */}
                <BotonCalculadora texto="C" color="#9B9B9B" accion={limpiar} />
                <BotonCalculadora texto="+/-" color="#9B9B9B" accion={positivoNegativo} />
                <BotonCalculadora texto="del" color="#9B9B9B" accion={btnDelete} />
                <BotonCalculadora texto="/" color="#FF9427" accion={btnDividir} />
            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>
                {/* Boton */}
                <BotonCalculadora texto="7" accion={armarNumero} />
                <BotonCalculadora texto="8" accion={armarNumero} />
                <BotonCalculadora texto="9" accion={armarNumero} />
                <BotonCalculadora texto="x" color="#FF9427" accion={btnMultiplicar} />
            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>
                {/* Boton */}
                <BotonCalculadora texto="4" accion={armarNumero} />
                <BotonCalculadora texto="5" accion={armarNumero} />
                <BotonCalculadora texto="6" accion={armarNumero} />
                <BotonCalculadora texto="-" color="#FF9427" accion={btnRestar} />
            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>
                {/* Boton */}
                <BotonCalculadora texto="1" accion={armarNumero} />
                <BotonCalculadora texto="2" accion={armarNumero} />
                <BotonCalculadora texto="3" accion={armarNumero} />
                <BotonCalculadora texto="+" color="#FF9427" accion={btnSumar} />
            </View>

            {/* Fila de botones */}
            <View style={styles.fila}>
                {/* Boton */}
                <BotonCalculadora texto="0" ancho={true} accion={armarNumero} />
                <BotonCalculadora texto="." accion={armarNumero} />
                <BotonCalculadora texto="=" color="#FF9427" accion={calcular} />
            </View>
        </View>
    );
};