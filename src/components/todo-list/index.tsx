import * as React from 'react';

interface IProp {
 tasks: Task[]
}

const TodoList: React.FC<IProp> = ({tasks}) => {
 return (
   <div>
    {
      tasks.map((x) => {
        return (
          <div key={x.id}>
            {x.content}
          </div>
        )
      })
    }
   </div>
 )
}

export default React.memo(TodoList)
