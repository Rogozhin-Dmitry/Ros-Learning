from django.shortcuts import resolve_url


class Course:
    pk = 0

    def __init__(self, name):
        self.name = name
        self.pk = Course.pk
        Course.pk += 1

    def get_url(self):
        return resolve_url(f'{self.pk}/lessons', course_pk=self.pk)


class Lesson:
    pk = 0

    def __init__(self, name):
        self.name = name
        self.pk = Lesson.pk
        Lesson.pk += 1
        self.course_pk = 0

    def get_url(self):
        return resolve_url("tasks", course_pk=self.course_pk, lesson_pk=self.pk)




class Task:
    pk = 0

    def __init__(self, name):
        self.name = name
        self.pk = Task.pk
        Task.pk += 1
        self.course_pk = 0
        self.lesson_pk = 0

    def get_url(self):
        return resolve_url("/", course_pk=self.course_pk, lesson_pk=self.pk,task_pk=self.pk)


class Controll:

    @staticmethod
    def get_user_courses(course_pk):
        print("courses")
        return [Course("Управление реактором"), Course("Как не взорвать реактор"),
                Course("Как выжить ели умираешь")]

    @staticmethod
    def get_courses_lessons(lesson_pk):
        print("lessons")
        return [Lesson("Урок 1"), Lesson("Урок 2"), Lesson("Урок 3"), Lesson("Урок 4")]

    @staticmethod
    def get_lessons_tasks(course_pk, lesson_pk):
        print("task")
        return [Task("Задание 1"), Task("Задание 2"), Task("Задание 3"), Task("Задание 4")]

    @staticmethod
    def get_course_by_pk(pk):
        return {}
