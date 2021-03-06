package controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import data.RecordDAO;
import entities.Record;

@RestController
public class ExerciseController {
	@Autowired
	private RecordDAO dao;
	
	@RequestMapping(path="exercise", method =RequestMethod.GET)
	public List<Record> exercise() {
		return dao.show();
	}
	
	@RequestMapping(path="exercise/{id}", method =RequestMethod.GET)
	public Record exercises(@PathVariable int id) {
		return dao.getRecord(id);
	}
	
	@RequestMapping(path="exercise/{id}", method =RequestMethod.DELETE)
	public boolean delete(@PathVariable int id) {
		return dao.deleteRecord(id);
	}
	
	@RequestMapping(path="exercise", method =RequestMethod.POST)
	public Record add(@RequestBody String json) {
		return dao.addRecord(json);
	}
	
	@RequestMapping(path="exercise/{id}", method =RequestMethod.PUT)
	public Record update(@RequestBody String json, @PathVariable int id) {
		return dao.updateRecord(json,id);
	}
	
	
	
	
	

}
