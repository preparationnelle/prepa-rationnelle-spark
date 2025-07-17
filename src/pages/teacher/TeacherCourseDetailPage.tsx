import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users, BookOpen, Calendar, Award, Settings, Plus, Edit, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TeacherLayout from '@/components/teacher/TeacherLayout';

const TeacherCourseDetailPage = () => {
  const { courseId } = useParams();
  
  // Mock data for the course
  const [course] = useState({
    id: courseId,
    title: 'Mathématiques ECG1',
    description: 'Cours de mathématiques pour ECG première année',
    students: 45,
    modules: 12,
    status: 'active' as const,
    lastUpdated: '2024-01-15'
  });

  const [modules] = useState([
    {
      id: 1,
      title: 'Algèbre linéaire',
      description: 'Introduction aux espaces vectoriels et matrices',
      lessons: 8,
      exercises: 15,
      status: 'published'
    },
    {
      id: 2,
      title: 'Analyse',
      description: 'Fonctions, limites et dérivées',
      lessons: 10,
      exercises: 20,
      status: 'published'
    },
    {
      id: 3,
      title: 'Probabilités',
      description: 'Théorie des probabilités et statistiques',
      lessons: 6,
      exercises: 12,
      status: 'draft'
    }
  ]);

  const [assignments] = useState([
    {
      id: 1,
      title: 'DS1 - Algèbre linéaire',
      type: 'exam',
      dueDate: '2024-02-15',
      submitted: 42,
      total: 45
    },
    {
      id: 2,
      title: 'Exercices pratiques - Matrices',
      type: 'homework',
      dueDate: '2024-02-10',
      submitted: 45,
      total: 45
    },
    {
      id: 3,
      title: 'Projet final - Analyse de données',
      type: 'project',
      dueDate: '2024-03-01',
      submitted: 12,
      total: 45
    }
  ]);

  const getStatusBadge = (status: string) => {
    const colors = {
      published: 'bg-green-100 text-green-800',
      draft: 'bg-yellow-100 text-yellow-800',
      archived: 'bg-gray-100 text-gray-800'
    };
    return colors[status as keyof typeof colors] || colors.draft;
  };

  const getAssignmentTypeBadge = (type: string) => {
    const colors = {
      exam: 'bg-red-100 text-red-800',
      homework: 'bg-blue-100 text-blue-800',
      project: 'bg-purple-100 text-purple-800'
    };
    return colors[type as keyof typeof colors] || colors.homework;
  };

  return (
    <TeacherLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link to="/prof/courses">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour aux cours
            </Button>
          </Link>
        </div>

        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-foreground">{course.title}</h1>
            <p className="text-muted-foreground">{course.description}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Settings className="h-4 w-4 mr-2" />
              Paramètres
            </Button>
            <Button variant="outline">
              <Eye className="h-4 w-4 mr-2" />
              Prévisualiser
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Étudiants inscrits</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{course.students}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Modules</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{modules.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Devoirs en cours</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{assignments.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taux de participation</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94%</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="modules" className="space-y-4">
          <TabsList>
            <TabsTrigger value="modules">Modules</TabsTrigger>
            <TabsTrigger value="assignments">Devoirs</TabsTrigger>
            <TabsTrigger value="students">Étudiants</TabsTrigger>
            <TabsTrigger value="grades">Notes</TabsTrigger>
          </TabsList>

          <TabsContent value="modules" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Modules du cours</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Nouveau module
              </Button>
            </div>
            
            <div className="grid gap-4">
              {modules.map((module) => (
                <Card key={module.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{module.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{module.description}</p>
                      </div>
                      <Badge className={getStatusBadge(module.status)}>
                        {module.status === 'published' ? 'Publié' : 'Brouillon'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span>{module.lessons} leçons</span>
                        <span>{module.exercises} exercices</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-1" />
                          Modifier
                        </Button>
                        <Button size="sm">
                          Gérer
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="assignments" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Devoirs et évaluations</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Nouveau devoir
              </Button>
            </div>
            
            <div className="grid gap-4">
              {assignments.map((assignment) => (
                <Card key={assignment.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{assignment.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          Échéance: {new Date(assignment.dueDate).toLocaleDateString('fr-FR')}
                        </p>
                      </div>
                      <Badge className={getAssignmentTypeBadge(assignment.type)}>
                        {assignment.type === 'exam' ? 'Examen' : 
                         assignment.type === 'homework' ? 'Exercices' : 'Projet'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="text-sm">
                        <span className="font-medium">{assignment.submitted}</span>
                        <span className="text-muted-foreground">/{assignment.total} rendus</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Voir les rendus
                        </Button>
                        <Button size="sm">
                          Corriger
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="students">
            <Link to={`/prof/courses/${courseId}/students`}>
              <Button className="w-full">
                <Users className="h-4 w-4 mr-2" />
                Gérer les étudiants
              </Button>
            </Link>
          </TabsContent>

          <TabsContent value="grades">
            <Link to={`/prof/courses/${courseId}/grades`}>
              <Button className="w-full">
                <Award className="h-4 w-4 mr-2" />
                Gérer les notes
              </Button>
            </Link>
          </TabsContent>
        </Tabs>
      </div>
    </TeacherLayout>
  );
};

export default TeacherCourseDetailPage;