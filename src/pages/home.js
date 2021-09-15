import React from 'react';

import Banner from '../assets/img/main-banner.jpg';
import WavyLine from '../assets/img/wavy-line.svg';
import TastesGood from '../assets/img/tastes-good.png';

const Home = () => {
  return (
    <div>
      <bakery-welcome
        style={{
          backgroundImage: 'url(' + Banner + ')',
        }}
      >
        <bg-overlay></bg-overlay>
        <grid-lock>
          <h1 className="max-large-serif">Pastry with love</h1>
          <img src={WavyLine} alt="decorative wavy line" />
          <p>
            We’re bringing you fresh ingredients every day in ways you can’t
            resist.
          </p>
          <a className="btn" href="">
            Our Menu
          </a>
        </grid-lock>
      </bakery-welcome>
      <cakes-section>
        <grid-lock>
          <flex-columns data-columns="2">
            <div>
              <h2 className="extra-large-serif">Art of cakes</h2>
              <p>We create delicious memories</p>
              <p>
                Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
                quam semper libero, sit amet adipiscing sem neque sed.
              </p>
              <p className="medium-serif">Chef Cook</p>
              <chef-quote>
                <p>Unique creations for unique occasions.</p>
              </chef-quote>
            </div>
            <div>
              <img
                src={TastesGood}
                alt="image of an assortment of cakes and desserts"
              />
            </div>
          </flex-columns>
        </grid-lock>
      </cakes-section>
      <pancakes-section>
        <pancakes-feature>
          <flex-columns data-columns="2">
            <div>
              <p>tasty pancake image</p>
            </div>
            <div>
              <h3>Tasty pancakes</h3>
              <p>Season favorite</p>
              <p>
                Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet
                orci eget eros faucibus.
              </p>
            </div>
          </flex-columns>
        </pancakes-feature>
      </pancakes-section>
      <breakfast-section>
        <grid-lock>
          <flex-columns data-columns="2">
            <div>
              <h4>Breakfast</h4>
              <p>7am breafast? We're open!</p>
              <menu-item>
                <p>Full breakfast</p>
                <p>
                  Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                  augue.
                </p>
                <span>$12.49</span>
              </menu-item>
              <menu-item>
                <p>Full breakfast</p>
                <p>
                  Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                  augue.
                </p>
                <span>$12.49</span>
              </menu-item>
              <menu-item>
                <p>Full breakfast</p>
                <p>
                  Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                  augue.
                </p>
                <span>$12.49</span>
              </menu-item>
            </div>
            <div>
              <p>special feature madoo</p>
            </div>
          </flex-columns>
        </grid-lock>
      </breakfast-section>
      <sandwich-section>
        <grid-lock>
          <flex-columns data-columns="2">
            <div>
              <food-item>
                <p>img</p>
                <p>Class aptent</p>
                <p>
                  Quot alienum persecuti ut eam, nam ad atqui primis nusquam.
                </p>
              </food-item>
              <food-item>
                <p>img</p>
                <p>Class aptent</p>
                <p>
                  Quot alienum persecuti ut eam, nam ad atqui primis nusquam.
                </p>
              </food-item>
              <food-item>
                <p>img</p>
                <p>Class aptent</p>
                <p>
                  Quot alienum persecuti ut eam, nam ad atqui primis nusquam.
                </p>
              </food-item>
            </div>
            <div>
              <sandwich-feature>Tasty sammich</sandwich-feature>
            </div>
          </flex-columns>
        </grid-lock>
      </sandwich-section>
    </div>
  );
};
export default Home;
