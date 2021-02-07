import { doc } from './doc';

export class webload {
    static GamesResponse(json_: any) {
      const getAllGames = JSON.parse(JSON.stringify(json_))
      const games = getAllGames.map(item => {
        var game_string = `
  <div class="grid__item">
      <figure class="snip1344" style="
            min-width: 250px;
            max-width: 320px;
            width: 100%;">
          <img src="`+ item.image + `" alt="profile-sample1" class="background" /><img src="` + item.image + `"
              alt="profile-sample1" class="profile" style="
  
                border: none;
                border-radius: 10px;
                " />
          <figcaption>
              <h3><b><em>`+ item.name + `</em></b></h3>
              <center>
              <br />
              <div class="icons">
                  <button class="button border" onclick="window.open('`+ item.button_link + `')">
                      <svg viewBox="0 0 132 48" preserveAspectRatio="none">
                          <path
                              d="M4,3 C24.6666667,3 45.3333333,3 66,3 C86.6666667,3 107.333333,3 128,3 C129.104569,3 130,3.8954305 130,5 C130,11.3333333 130,17.6666667 130,24 C130,30.3333333 130,36.6666667 130,43 C130,44.1045695 129.104569,45 128,45 C107.333333,45 86.6666667,45 66,45 C45.3333333,45 24.6666667,45 4,45 C2.8954305,45 2,44.1045695 2,43 C2,36.6666667 2,30.3333333 2,24 C2,17.6666667 2,11.3333333 2,5 C2,3.8954305 2.8954305,3 4,3 Z" />
                      </svg>
                      <span>`+ item.button_text + ` »</span>
                  </button>
              </div>
          </center>
          </figcaption>
      </figure>
  </div>
        `;
        if (item.options.locked === true) {
          var locked_game_string = `
  <div class="grid__item">
      <figure class="snip1344" style="
            min-width: 250px;
            max-width: 320px;
            width: 100%;">
          <img src="core/imagesCore/locked.svg" alt="profile-sample1" class="background" /><img src="core/imagesCore/locked.svg"
              alt="profile-sample1" class="profile xd" style="
  
                border: none;
                border-radius: 10px;
                " />
          <figcaption>
              <h3><b><em>Locked Game</em></b></h3>
              <div class="icons">No Joke Caption</div>
          </figcaption>
      </figure>
  </div>
          `;
          return locked_game_string;
        } else {
          return game_string;
        }
      })
      doc.set.HTML('games', games.join(''));
    }
  }