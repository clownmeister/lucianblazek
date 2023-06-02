import axios from 'axios/index';

const SpellList: () => { list: () => void } = () => {
  const list: () => void = () => {
    axios.get('https://www.dnd5eapi.co/api/spells')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return {list: list};
};

export default SpellList();
