import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import regularExpressions from './modules/regularExpressions';
import tabs from './modules/tabs';
import slider from './modules/slider';
import sliderCarousel from './modules/sliderCarousel';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

timer('21 december 2023');
menu();
modal();
regularExpressions();
tabs();
slider();
sliderCarousel();
calc(100);
sendForm({
  fornId: 'form1',
});

sendForm({
  fornId: 'form2',
});

sendForm({
  fornId: 'form3',
});
