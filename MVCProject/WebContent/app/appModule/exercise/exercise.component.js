angular.module('appModule')
  .component('exercise', {
	  templateUrl : 'app/appModule/exercise/exercise.component.html',
	  controller: function(exerciseService){
		  var vm = this;
		  
		  vm.selected = null;
		  vm.copy = null;
		  vm.exercises = [];
		  
		  
		  
		  function reload(){
			  exerciseService.index().then(function(res){
				  console.log(res);
				  vm.exercises = res.data;
			  }).catch(function(error){
				  console.log(error);
			  });
		  }
		  
		  /*
		  vm.addTodo = function(todo){
			  todoService.create(todo).then(function(res){
				 console.log(res);
				 reload();
			  }).catch(function(error){
				  console.log(error);
			  });
			  
	       }
		  
		  vm.submitEdit = function(){
			  todoService.update(vm.copy).then(function(res){
				 console.log(res);
				 vm.displayTable();
			  }).catch(function(error){
				  console.log(error);
			  });
	       }
		  
	      vm.updateTodo = function(todo){
	    	  todoService.update(todo).then(function(res){
					 console.log(res);
					 reload();
				  }).catch(function(error){
					  console.log(error);
				  });
	      };
	      
	      vm.getNumTodos = function() {
		        return vm.todos.length;
		  };
		  
		  vm.displayTodo = function(todo){
			  vm.selected = todo;
			  vm.copy = angular.copy(vm.selected);
		  };
		  
		  vm.resetEdit = function(){
			  vm.copy = angular.copy(vm.selected);
		  };
		  
		  vm.destroy = function(id){
			  todoService.destroy(id).then(function(res){
					 console.log(res);
					 reload();
				  }).catch(function(error){
					  console.log(error);
				  });
		  };
		  
		  vm.displayTable = function(){
			  vm.selected = null;
			  vm.copy = null;
			  reload();
		  };
	      
		 */
	  },
	  controllerAs: 'vm'
  })