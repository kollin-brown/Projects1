{var Albums= [
        {
            "Name": "Barter 6",
            "Genre": "Hip Hop"   ,
            "ArtistName": "Young Thug"  ,
            "RelaseYear": "2015"  
            
        
        
        
        },
        
        {
            "Name": "2014 Forest Hills Drive",
            "Genre": "Hip Hop"   ,
            "ArtistName": "J. Cole"  ,
            "RelaseYear": "2014"   
         
        
        
        
        },
        {
            "Name": "Honest" ,
            "Genre": "Hip Hop"   ,
            "ArtistName": "Fututre"  ,
            "RelaseYear": "2014"   
           
        
        
        
        },
        {
            "Name":"Starboy" , 
            "Genre": "R&B/Soul"   ,
            "ArtistName": "The Weekend"  ,
            "RelaseYear": "2016"   
    
        
        
        
        }

    ]



}
var music = JSON.parse(Albums);
document.getElementById("Albums").innerHTML = `${albums.Name}, ${albums.Genere} ,${albums.ArtistName}, ${albums.ReleaseYea}` ;
let x = [];
x.push(music);

//seperates hip hop albums from the rest
const hip_hop = x.Genere.filter(xx=> xx==="Hip Hop");
console.log("The Hip Hop albums are: ", hip_hop);

relase_date = () => {return (x.RelaseYear);}

//creates james whp is a younthug and hipihop fan
class Fan
{
constructor(artist_name, fav_genre)
{
	this.artist_name = artist_name;
	this.fav_genre = fav_genre;
}
}
james = new fan("Young Thug", "Hip Hop");
document.getElementById("Young Thug").innerHTML = james.artist_name + " " + james.fav_genre;

function recognition()
{
var award = 'Grammy';
function displayName()
{
//startboy won a grammy.
    document.getElementById("Starboy").innerHTML = award;
}
console.log('We recognize' displayName, 'for a 'award) ;
}
var my_award = recognition();
my_award();
