## Time tracking application 

In this app, we will learn how to use : <br>

- Props  State
- Spread Operator
- Arrow Function
```javascript 
handleFormSubmit = att => {
    const { timers } = this.state;

    this.setState({
      timers: timers.map(timer => {
        if (timer.id === att.id) {
          const { title } = att;

          return {
            ...timer,
            title,
          };
        }

        return timer;
      }),
    });
  };
```
