import { View, Text, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';

export default class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diem: 0
        };
    }
    nangdiem() {
        this.setState({
            diem: this.state.diem + 1
        })
    }
    render() {
        return (
            <View style={{
                backgroundColor: 'green',
                margin: 20,
            }}>
                <Text style={
                    {
                        fontSize: 30,
                        color: 'yellow'
                    }
                }>
                    {this.props.name} | {this.props.tuoi}
                </Text>
                <Text
                    style={
                        {
                            fontSize: 30,
                            color: 'yellow'
                        }
                    }>{this.state.diem}</Text>
                <TouchableOpacity
                    onPress={() => {
                        this.nangdiem()
                    }}
                >
                    <Text style = {
                        {
                            color: 'white',
                            fontSize: 30
                        }
                    }>Nâng điểm</Text>
                </TouchableOpacity>
            </View>
        );
    }
}