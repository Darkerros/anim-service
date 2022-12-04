const sequelize = require('../../db')
const {DataTypes} = require('sequelize')


const Users = sequelize.define(
    'Users',{
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        email: {type: DataTypes.STRING, unique: true},
        password: {type: DataTypes.STRING},
        role: {type: DataTypes.STRING, defaultValue: "USER"},
    }
)

const UserBookmarks = sequelize.define(
    'UserBookmarks',{
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        bookmark: {type: DataTypes.STRING},
    }
)

const Anime = sequelize.define(
    'Anime',{
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        title: {type: DataTypes.STRING,require: true,unique: true},
        titleAlternative: {type: DataTypes.STRING},
        description: {type: DataTypes.STRING},
        titleSeason: {type: DataTypes.INTEGER,require: true},
        episodes: {type: DataTypes.INTEGER,require: true},
        year: {type: DataTypes.INTEGER},
        type: {type: DataTypes.STRING,require: true},//values: ['TV','Movie','Special','Ona','Ova','Uknown'],defaultValue: 'TV'
        status: {type: DataTypes.STRING,require: true},//values: ['Ongoing','Finished','Upcoming'],defaultValue: 'Upcoming'
        animeSeason: {type: DataTypes.STRING},//values: ['Fall','Winter','Summer','Spring']
    }
)

const AnimeTags = sequelize.define(
    'AnimeTags',{
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    }
)

const Tags = sequelize.define(
    'Tags',{
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        tag: {type: DataTypes.STRING},
    }
)

const AnimePoster = sequelize.define(
    'AnimePoster',{
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        poster_url: {type: DataTypes.STRING},
    }
)


const AnimeVideos = sequelize.define(
    'AnimeVideos',{
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        episode: {type: DataTypes.INTEGER},
        Season: {type: DataTypes.INTEGER},
        video_url: {type: DataTypes.STRING},
    }
)
const AnimeVideosVoicers = sequelize.define(
    'AnimeVideosVoicers',{
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        voicerName: {type: DataTypes.STRING,unique: true},
    }
)

const AnimeVideosType = sequelize.define(
    'AnimeVideosType',{
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        type: {type: DataTypes.STRING},
    }
)

const AnimeUpdates = sequelize.define(
    'AnimeUpdates',{
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        UpdateInfo : {type: DataTypes.STRING}
    }
)

AnimeUpdates.belongsTo(Anime)
Anime.hasMany(AnimeUpdates)

Anime.hasMany(AnimeTags)
AnimeTags.belongsTo(Anime)
AnimeTags.belongsTo(Tags)


Anime.hasOne(AnimePoster)
AnimePoster.belongsTo(Anime)

Anime.hasMany(AnimeVideos)
AnimeVideos.belongsTo(Anime)
AnimeVideosType.hasOne(AnimeVideos)
AnimeVideos.belongsTo(AnimeVideosType)
AnimeVideosVoicers.hasOne(AnimeVideos)
AnimeVideos.belongsTo(AnimeVideosVoicers)
AnimeVideosVoicers.hasMany(AnimeVideos)

Anime.hasMany(UserBookmarks)
UserBookmarks.belongsTo(Anime)
UserBookmarks.belongsTo(Users)
Users.hasMany(UserBookmarks)

module.exports = {
    Users,UserBookmarks,Anime,AnimeTags,AnimePoster,AnimeVideos,AnimeVideosType,AnimeVideosVoicers,Tags,AnimeUpdates
}