import React, {useState} from 'react';

// Components:
import TaskPopApp from './CreateTaskPopAp';

export default function CreateTaskButtun({props}) {
        const [check, setCheck] = useState(false);

        const propsPopApp = {
            closeHandler: createPop,
            addHandler: props.setTasks,
            idCount: props.setCountID,
            actualId: props.countID,
        }
        
        function createPop() {
            setCheck(!check);
        }

        // console.log('create button pop-app!');

        return(
            <React.Fragment>
                <button
                    className="button-pop-app"
                    onClick={createPop}
                >
                    Create new task
                </button>
                {check ? <TaskPopApp props={propsPopApp}/> : null}
            </React.Fragment>
        )
}