import {useState} from "react";
import {MainLayout} from "./components/MainLayout/MainLayout";
import {Heading} from "./components/Heading/Heading";
import {ShadowBlock} from "./components/ShadowBlock/ShadowBlock";
import {TextInput} from "./components/TextInput/TextInput";

import styles from './App.module.css';

function App() {
    const [pros,setPros] = useState([{id: 1,text: ''}])
    const [cons,setCons] = useState([{id: 1,text: ''}])
    
    const handleAddPros = () => {
        setPros(prev => [...prev,{id: pros.length+1,text: ''}])
    }
    
    const handleAddCons = () => {
         setCons(prev => [...prev,{id: cons.length+1,text: ''}])
    }
    
    const handleUpdatePros = (value,id) => {
        const updated = pros.map(el => {
            if (el.id === id) {
                return {
                    ...el,
                    text: value
                }
            }
            return el;
        })
        setPros(updated)
    }
    
    const handleUpdateCons = (value,id) => {
        const updated = cons.map(el => {
            if (el.id === id) {
                return {
                    ...el,
                    text: value
                }
            }
            return el
        })
        setCons(updated)
    }
    
    const handleRemoveProItem = (id) => {
        const np = pros.length > 1 ? pros.filter(el => el.id !== id) : pros
        setPros(np)
    }
    
    const handleRemoveConItem = (id) => {
        const nc = cons.length > 1 ? cons.filter(el => el.id !== id) : cons
        setCons(nc)
    }
    
    return (
        <div className={styles.AppWrapper}>
            <MainLayout parts={2}>
                <div className={styles.ProsCons}>
                    <Heading variant="h3" className={styles.Title}>PROS</Heading>
                    <ShadowBlock className={styles.ProsConsItems}>
                        {pros.map(({id,text},index) => (
                            <TextInput 
                                key={id} 
                                id={id} 
                                number={index} 
                                text={text} 
                                onAddItem={handleAddPros}
                                removeItem={handleRemoveProItem}
                                onUpdateItem={handleUpdatePros}
                            />
                        ))}
                    </ShadowBlock>
                </div>
                
                <div className={styles.ProsCons}>
                    <Heading variant="h3" className={styles.Title}>CONS</Heading>
                    <ShadowBlock className={styles.ProsConsItems}>
                        {cons.map(({id,text},index) => (
                            <TextInput 
                                key={id} 
                                id={id} 
                                number={index} 
                                text={text} 
                                onAddItem={handleAddCons}
                                removeItem={handleRemoveConItem}
                                onUpdateItem={handleUpdateCons}
                            />
                        ))}
                    </ShadowBlock>
                </div>
            </MainLayout>
        </div>
    );
}

export default App;
