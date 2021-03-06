package data;


import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;

import entities.Record;

@Transactional
@Repository
public class RecordDAOImpl implements RecordDAO {
		@PersistenceContext
		private EntityManager em;
		
		@Override
		public List<Record> show(){
			String query = "SELECT r FROM Record r";
			List<Record> records = em.createQuery(query, Record.class).getResultList();
			return records;
		}
		
		@Override
		public Record getRecord(int id) {
			return em.find(Record.class, id);
		}
		
		@Override
		public boolean deleteRecord(int id) {
			try {
				em.remove(getRecord(id));
				return true;
			} catch(Exception e) {
				return false;
			}
		}
		
		@Override
		public Record addRecord(String json) {
			ObjectMapper mapper = new ObjectMapper();
			try {
				Record newRecord = mapper.readValue(json, Record.class);
				em.persist(newRecord);
				return newRecord;
			} catch(Exception e) {
				e.printStackTrace();
			}
			return null;
		}
		
		@Override
		public Record updateRecord(String json, int id) {
			ObjectMapper mapper = new ObjectMapper();
			try {
				Record newRecord = mapper.readValue(json, Record.class);	
				Record oldRecord = em.find(Record.class, id);
				oldRecord.setActivity(newRecord.getActivity());
				oldRecord.setWeight(newRecord.getWeight());
				em.persist(oldRecord);
				return oldRecord;
			} catch(Exception e) {
				e.printStackTrace();
			}
			return null;
		}
		
		
}
