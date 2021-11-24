import $ from 'jquery';
import _ from 'lodash';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let cont = 0;

const updateCounter = () => {
  cont = cont + 1;
  $('#count').html(`${cont} clicks on the button`);
};

$('button').on('click', _.debounce(updateCounter));
