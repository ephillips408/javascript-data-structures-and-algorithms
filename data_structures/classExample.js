class Artist {
  constructor (name, genre, year, greatestHit, awardWinningAlbums) {
    this.name = name;
    this.genre = genre;
    this.year = year;
    this.greatestHit = greatestHit;
    this.awardWinningAlbums = [];
  }
  sentence() {
    return `${this.name} is a ${this.genre} artist.`;
  }
  newGenre(nameOfGenre) {
    this.genre = `${this.genre} and ${nameOfGenre}`;
  }
  wonAward(...albums) {
    this.awardWinningAlbums.push(...albums);
  }
  numOfAwardsWinningAlbums() {
    return this.awardWinningAlbums.length;
  }
  static talentedArtists() {
    return "These artists are talented."
  }
}

let stevieWonder = new Artist ("Stevie Wonder", "Soul", 1972, "Sir Duke");
let kendrickLamar = new Artist ("Kendrick Lamar", "Hip-Hop", 2012, "Money Trees");

stevieWonder.newGenre("Funk");
stevieWonder.newGenre("R&B");
stevieWonder.wonAward("Songs in the Key of Life");
kendrickLamar.wonAward("Good Kid, mAAD City", "To Pimp a Butterfly");

console.log(kendrickLamar.awardWinningAlbums);
console.log(Artist.talentedArtists());
