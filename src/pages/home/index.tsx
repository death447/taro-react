import {useState} from 'react';
import { Popup, Button } from '@parallel-line/mobile'


const Home = () => {
    const [visible1, setVisible1] = useState(false)

    return (
       <div>

           <Button
               color="primary"
               onClick={() => {
                   setVisible1(true)
               }}
           >
               展开弹出层1
           </Button>
           <Popup
               visible={visible1}
               onMaskClick={() => {
                   setVisible1(false)
               }}
               bodyStyle={{ height: '20vh' }}
           >
               <div style={{ padding: '24px' }}>
                   <div>这是弹出层2</div>
               </div>
           </Popup>
       </div>
    );
};

export default Home;
