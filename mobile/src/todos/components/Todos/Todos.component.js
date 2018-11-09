import * as React from 'react';
import { SectionList, Text, StyleSheet, View } from 'react-native';

class TodosComponent extends React.Component {

    render() {
        const { onAdd, todos } = this.props;
        return (
            <View style={styles.container}>
                <SectionList
                    sections={todos.map(todo => (
                        {
                            title: todo.title,
                            data: todo.items
                        }
                    ))}
                    renderItem={
                        ({item}) => <Text style={styles.item}>{item.title}</Text>
                    }
                    renderSectionHeader={({section: {title}}) => (
                        <Text style={{fontWeight: 'bold'}}>{title}</Text>
                      )}
                    keyExtractor={(item, index) => item.title + index}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })

export default TodosComponent;

