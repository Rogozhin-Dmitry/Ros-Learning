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
        return resolve_url(f"{self.pk}/tasks", course_pk=self.course_pk, lesson_pk=self.pk)


class Task:
    pk = 0

    def __init__(self, name):
        self.name = name
        self.pk = Task.pk
        Task.pk += 1
        self.course_pk = 0
        self.lesson_pk = 0

    def get_url(self):
        return resolve_url("tasks", course_pk=self.course_pk, lesson_pk=self.lesson_pk, task_pk=self.pk)


class Materials:
    pk = 0

    def __init__(self, name, description):
        self.name = name
        self.description = description
        self.pk = Task.pk
        Materials.pk += 1
        self.course_pk = 0
        self.lesson_pk = 0
        self.task_pk = 0

    def get_url(self):
        return resolve_url("materials", course_pk=self.course_pk, lesson_pk=self.lesson_pk, task_pk=self.task_pk,
                           materials_pk=self.pk)


class Controll:

    @staticmethod
    def get_user_courses(course_pk):
        print("courses")
        return [Course("Управление реактором"), Course("Как не взорвать реактор"),
                Course("Как выжить ели умираешь")]

    @staticmethod
    def get_courses_lessons(lesson_pk):
        print("lessons")
        return [Lesson("Урок 1"), Lesson("Урок 2"), Lesson("Урок 3"), Lesson("Урок 4"), Lesson("Урок 5"),
                Lesson("Урок 6")]

    @staticmethod
    def get_lessons_tasks(course_pk, lesson_pk):
        print("task")
        return [Task("Задание 1"), Task("Задание 2"), Task("Задание 3"), Task("Задание 4")]

    @staticmethod
    def get_tasks_materilas(course_pk, lesson_pk, task_pk):
        print("materials")
        return Materials("Ликвидация последствий атомной ЧС", "А. После взрыва ядерного боеприпаса\
 Эффективная защита населения, сохранение работоспособности рабочих и \
служащих во многом зависят от своевременного выявления радиоактивного \
загрязнения, объективной оценки сложившейся обстановки. Надо учитывать, что \
процесс формирования радиоактивного следа длится несколько часов. ")

    @staticmethod
    def get_course_by_pk(pk):
        return {}
