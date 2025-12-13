from kivy.uix.screenmanager import Screen
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.label import Label
from kivy.uix.button import Button


class ReportScreen(Screen):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)

        layout = BoxLayout(
            orientation="vertical",
            padding=40,
            spacing=20
        )

        title = Label(
            text="Mental Wellness Report",
            font_size=26
        )

        self.score_label = Label(
            text="Your Score: 75 / 100",
            font_size=20
        )

        feedback = Label(
            text=(
                "You are doing well mentally.\n"
                "Try meditation and proper sleep\n"
                "to improve your mental health."
            ),
            font_size=16
        )

        home_btn = Button(
            text="Back to Home",
            size_hint_y=None,
            height=45
        )

        home_btn.bind(on_press=self.go_home)

        layout.add_widget(title)
        layout.add_widget(self.score_label)
        layout.add_widget(feedback)
        layout.add_widget(home_btn)

        self.add_widget(layout)

    def go_home(self, instance):
        self.manager.current = "home"


