import './App.css';
import 'component-library-subpackages/dist/index.css';
import { Button, PersistentBanner } from 'component-library-subpackages';
import { IconPencil } from 'component-library-subpackages/icons';

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
