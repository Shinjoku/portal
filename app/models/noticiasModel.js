module.exports = function(){

  this.getNoticias = function(connection, callback){
      connection.query('SELECT * FROM NOTICIAS', callback);
  }

  this.getNoticia = function(connection, callback){
    connection.query('SELECT * FROM NOTICIAS WHERE ID_NOTICIA = 2', callback);
  }

  return this;
}
