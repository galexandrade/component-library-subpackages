import './App.css';
import 'component-library-subpackages/dist/index.css';
import {
    Button,
    IconPencil,
    PersistentBanner
} from 'component-library-subpackages';

function App() {
    return (
        <div className="App">
            <PersistentBanner>
                Some informative message to the user on this persistent banner
            </PersistentBanner>
            <br />
            <Button>
                <IconPencil />
                Edit
            </Button>
        </div>
    );
}

export default App;
