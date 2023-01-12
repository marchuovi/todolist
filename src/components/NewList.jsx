import React from 'react'
import CheckB from './CheckB'

const NewList = props => {
    const { list, setList } = props;
    const onChangeStatus = e => {
        const { name, checked } = e.target;

        const updateList = list.map(item => ({
          ...item,
          done: item.id === name ? checked : item.done
        }));
        setList(updateList);
        
        
        const onClickRemoveItem = e => {
            const updateList = list.filter(item => !item.done);
            setList(updateList);
          };
      };
      const chk = list.map(item => (
      <CheckB key={item.id} data={item} onChange={onChangeStatus}/>
    ));


    return (
      <div className="todo-list">
        {list.length ? chk : "No hay elementos en la lista"}
        {list.length ? (
          <p>
            <button className="button blue">
              Delete all done
            </button>
          </p>
        ) : null}
      </div>
    );
  };

export default NewList


