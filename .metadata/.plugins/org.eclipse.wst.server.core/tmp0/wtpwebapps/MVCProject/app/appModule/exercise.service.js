angular.module('appModule')
.factory('exerciseService',function($http){
	var service = {};
	
	service.index = function(){
		return $http({
		      method : 'GET',
		      url : 'rest/exercise'
		    })
	};
	
	/*
	service.create = function(task){
		task.completed = false; 
		return $http({
			method: 'POST',
			url : 'rest/user/1/todo',
			headers : {
			    'Content-Type' : 'application/json'
			  },
			data : task
		})
	};
	
	service.destroy = function(id){
		return $http({
			method: 'DELETE',
			url : 'rest/user/1/todo/' + id
		})
	};
      
    service.getNumTasks = function() {
        return tasks.length;
    };

    service.update = function(task){
    		return $http({
    			method: 'PUT',
    			url: 'rest/user/1/todo/' + task.id,
    			headers : {
    			    'Content-Type' : 'application/json'
    			  },
    			data : task
    		})
    	
    };
    
	*/
	return service;
})