angular.module('appModule')
  .component('exercise', {
	  templateUrl : 'app/appModule/exercise/exercise.component.html',
	  controller: function(exerciseService){
		  var vm = this;
		  vm.selected = null;
		  vm.copy = null;
		  vm.exercises = [];
		  reload();
		  
		  function reload(){
			  exerciseService.index().then(function(res){
				  console.log(res);
				  vm.exercises = res.data;
			  }).catch(function(error){
				  console.log(error);
			  });
		  }
		  
		  vm.addExercise = function(exercise){
			  exerciseService.create(exercise).then(function(res){
				 console.log(res);
				 reload();
			  }).catch(function(error){
				  console.log(error);
			  });
			  
	       }
		  
	      vm.updateExercise = function(exercise){
	    	  exerciseService.update(exercise).then(function(res){
					 console.log(res);
					 reload();
				  }).catch(function(error){
					  console.log(error);
				  });
	      };
	      
		  vm.destroy = function(id){
			  exerciseService.destroy(id).then(function(res){
					 console.log(res);
					 reload();
				  }).catch(function(error){
					  console.log(error);
				  });
		  };	
		  
		  vm.displayUpdate = function(exercise){
			  vm.selected = exercise;
			  vm.copy = angular.copy(vm.selected);
		  };
	  },
	  controllerAs: 'vm'
  })