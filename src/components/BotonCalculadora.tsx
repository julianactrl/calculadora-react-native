import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Prop {
    texto: string;
    color?: string;
    ancho?: boolean;
    accion: (numeroTexto:string) => void;
}

export const BotonCalculadora = ({ texto, color = '#2D2D2D', ancho = false, accion }: Prop) => {
    return (
        <TouchableOpacity
            onPress={() => accion(texto)}
        >
            <View
                style={{
                    ...styles.boton,
                    backgroundColor: color,
                    width: (ancho) ? 180 : 80,
                }}>
                <Text style={{
                    ...styles.botonText,
                    color: (color === '#9B9B9B') ? 'black' : 'white'
                }}>{texto}</Text>
            </View>
        </TouchableOpacity>
    );
};
