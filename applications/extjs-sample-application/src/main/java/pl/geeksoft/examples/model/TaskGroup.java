package pl.geeksoft.examples.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

import org.apache.commons.lang3.builder.ToStringBuilder;

import pl.geeksoft.examples.model.base.BaseModel;

@Entity
@Table(name = "task_group")
@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public class TaskGroup extends BaseModel {

	@Column(name = "name", nullable = false)
	private String name;

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		ToStringBuilder builder = new ToStringBuilder(this);
		builder.appendSuper(super.toString());
		builder.append("name", this.name);
		return builder.toString();
	}
}
