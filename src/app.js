import BotUI from 'botui';
import Vue from 'vue'

/* if using webpack */
var botui = new BotUI('botui-app', {
  vue: Vue
});

const init = () => {
  botui.message.bot({
    delay: 1000,
    content: 'Hola, soy monokuBot y estoy para servirte. ¿Como te llamas?'
  }).then(() => {
    return botui.action.text({
      delay: 1000,
      action: {
        value: 'Julian Amaya',
        placeholder: 'Ejemplo: Julian Amaya'
      },
    })
    .then(res => {
      return botui.message.bot({
        delay: 1000,
        content: `Hola ${res.value} un placer conocerte que deseas saber de monoku?`
      })
    })
    .then(() => {
      return botui.action.button({
        delay: 1000,
        action: [
          {
            text: 'Contactarnos',
            value: 'contact',
          },
          {
            text: '¿Quienes somos?',
            value: 'about',
          },
        ]
      })
      .then(res => {
        if(res.value === 'contact') {
          contact();
        } else {
          about();
        }
      });
    });
  })
};

const contact = () => {
  botui.message.bot({
    delay: 1000,
    content: `
      Puedes entrar a [Monoku](https://monoku.com)^
      buscar el formulario de contacto y contarnos quien eres, también puedes llamarnos !(phone)
      <a href="tel:+5718050930">+5718050930</a> o escribirnos a !(envelope-open)
      <a href="mailto:info@monoku.com" target="_blank">info@monoku.com</a>
    `
  })
  // .then(init);
}

const about = () => {
  botui.message.bot({
    delay: 1000,
    content: `
      !(star) Ve a [Monoku](https://monoku.com)^ y conocenos mas...
    `,
  }).then(() => {
    botui.message.bot({
      content: 'Here is an image ![monoku](https://cdn-images-1.medium.com/max/1200/1*AV5QOTFx4iOV2d10ojnegw.png)'
    });
  });
}


init();
