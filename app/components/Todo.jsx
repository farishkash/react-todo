var React = require('react');
var moment = require('moment');
var Todo = React.createClass ({

  render: function(){
    var {id, text, completed, createAt, completedAt} = this.props;
    var renderDate = ()=> {
      var message = 'Created ';
      var timestamp = createAt;
      if (completed ){
        message = 'Completed ';
        timestamp = completedAt;
      }
      return message + moment.unix(timestamp).format ('MMM Do YYYY @ h:mm a');
        };

   return(
     <div onClick={()=> {
       this.props.onToggle(id);
     }}>
     <input type="checkbox" checked={completed} />
     <p>{renderDate()}</p>
     {text}
     </div>
   )
 }
});

 module.exports = Todo;
