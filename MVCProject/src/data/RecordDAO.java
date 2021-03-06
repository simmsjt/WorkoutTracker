package data;

import java.util.List;

import entities.Record;

public interface RecordDAO {

	List<Record> show();

	boolean deleteRecord(int id);

	Record getRecord(int id);

	Record addRecord(String json);

	Record updateRecord(String json, int id);
	

}
