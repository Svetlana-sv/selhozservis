// import {YMaps, Map, Placemark} from '@pbe/react-yandex-maps';

import Wrapper from "../../components/lib/Wrapper/Wrapper"


const Contacts = () => {
  return <Wrapper>
    <h2>Контакты</h2>

    {/*<YMaps query={{ lang: 'en_RU' }}>*/}
    {/*    <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />*/}
    {/*    <Placemark geometry={[55.684758, 37.738521]} />*/}
    {/*    /!*<Placemark geometry={[55.758372, 37.682619]} options={{iconColor: '#000'}}/>*!/*/}
    {/*</YMaps>*/}

      {/*https://yandex.com/map-constructor/?from=mapsapi*/}
      <iframe
          src="https://yandex.com/map-widget/v1/?um=constructor%3A15945225de10963b362952e6c2d28e12513fc03503856da1d6c8fd7cd1843d76&amp;source=constructor"
          width="500" height="400" frameBorder="0"></iframe>
  </Wrapper>
}

export default Contacts