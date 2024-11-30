import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('student')
export class Student {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'student_name', length: 255, unique: true })
  studentName: string;
  
  @ManyToMany(
  () => Course, 
  course => course.students, //optional
  {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'})
  @JoinTable({
    name: 'student_course',
    joinColumn: {
      name: 'student_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'course_id',
      referencedColumnName: 'id',
    },
  })
  courses?: Course[];
}

@Entity('course')
export class Course {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'course_name', length: 255, unique: true })
  courseName: string;
  
  @ManyToMany(
    () => Student,
    student => student.courses,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION',},
  )
  students?: Student[];
}



@Entity('student_course')
export class StudentCourse {
  // @PrimaryGeneratedColumn()
  // id: number;//

  @PrimaryColumn({ name: 'student_id' })
  studentId: number;

  @PrimaryColumn({ name: 'course_id' })
  courseId: number;

  
  @ManyToOne(
    () => Student,
    student => student.id,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
  )
  @JoinColumn([{ name: 'student_id', referencedColumnName: 'id' }])
  students: Student[];

  @ManyToOne(
    () => Course,
    course => course.id,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
  )
  @JoinColumn([{ name: 'course_id', referencedColumnName: 'id' }])
  courses: Course[];
}
