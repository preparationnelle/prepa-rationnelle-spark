import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { ParentRequest, TeacherApplication } from '@/types/parent-teacher';
import { Settings, Users, GraduationCap, Eye, CheckCircle, XCircle, Clock, Phone, Mail, Calendar, BookOpen, Euro } from 'lucide-react';

const GestionPage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [parentRequests, setParentRequests] = useState<ParentRequest[]>([]);
  const [teacherApplications, setTeacherApplications] = useState<TeacherApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedParentRequest, setSelectedParentRequest] = useState<ParentRequest | null>(null);
  const [selectedTeacherApplication, setSelectedTeacherApplication] = useState<TeacherApplication | null>(null);

  // Vérification d'authentification
  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
      return;
    }
    // Ici on pourrait ajouter une vérification de rôle admin si nécessaire
  }, [currentUser, navigate]);

  // Charger les données
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      
      // Charger les demandes parents
      const { data: parentData, error: parentError } = await supabase
        .from('parent_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (parentError) throw parentError;

      // Charger les candidatures professeurs
      const { data: teacherData, error: teacherError } = await supabase
        .from('teacher_applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (teacherError) throw teacherError;

      setParentRequests(parentData || []);
      setTeacherApplications(teacherData || []);
    } catch (error) {
      console.error('Erreur chargement données:', error);
      toast({
        title: "Erreur",
        description: "Impossible de charger les données.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const updateParentRequestStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('parent_requests')
        .update({ status })
        .eq('id', id);

      if (error) throw error;

      setParentRequests(prev => 
        prev.map(req => req.id === id ? { ...req, status: status as any } : req)
      );

      toast({
        title: "Statut mis à jour",
        description: "Le statut de la demande a été modifié.",
      });
    } catch (error) {
      console.error('Erreur mise à jour:', error);
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour le statut.",
        variant: "destructive"
      });
    }
  };

  const updateTeacherApplicationStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('teacher_applications')
        .update({ status })
        .eq('id', id);

      if (error) throw error;

      setTeacherApplications(prev => 
        prev.map(app => app.id === id ? { ...app, status: status as any } : app)
      );

      toast({
        title: "Statut mis à jour",
        description: "Le statut de la candidature a été modifié.",
      });
    } catch (error) {
      console.error('Erreur mise à jour:', error);
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour le statut.",
        variant: "destructive"
      });
    }
  };

  const getStatusBadge = (status: string, type: 'parent' | 'teacher') => {
    const baseClasses = "text-xs font-medium px-2 py-1 rounded-full";
    
    if (type === 'parent') {
      switch (status) {
        case 'pending':
          return <Badge className={`${baseClasses} bg-orange-100 text-orange-800`}>En attente</Badge>;
        case 'processing':
          return <Badge className={`${baseClasses} bg-blue-100 text-blue-800`}>En cours</Badge>;
        case 'completed':
          return <Badge className={`${baseClasses} bg-green-100 text-green-800`}>Terminé</Badge>;
        default:
          return <Badge className={`${baseClasses} bg-gray-100 text-gray-800`}>{status}</Badge>;
      }
    } else {
      switch (status) {
        case 'pending':
          return <Badge className={`${baseClasses} bg-orange-100 text-orange-800`}>En attente</Badge>;
        case 'approved':
          return <Badge className={`${baseClasses} bg-green-100 text-green-800`}>Approuvé</Badge>;
        case 'rejected':
          return <Badge className={`${baseClasses} bg-red-100 text-red-800`}>Refusé</Badge>;
        default:
          return <Badge className={`${baseClasses} bg-gray-100 text-gray-800`}>{status}</Badge>;
      }
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--page-bg)' }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des données...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: 'var(--page-bg)' }}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <div className="p-3 rounded-lg bg-orange-100 text-orange-600">
              <Settings className="h-8 w-8" />
            </div>
            Gestion des demandes
          </h1>
          <p className="text-gray-600">
            Gérez les demandes des parents et les candidatures des professeurs
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="parents" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="parents" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Demandes Parents ({parentRequests.length})
            </TabsTrigger>
            <TabsTrigger value="teachers" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Candidatures Professeurs ({teacherApplications.length})
            </TabsTrigger>
          </TabsList>

          {/* Tab Demandes Parents */}
          <TabsContent value="parents" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-orange-600" />
                  Demandes des parents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2 font-medium text-gray-700">Date</th>
                        <th className="text-left py-3 px-2 font-medium text-gray-700">Parent</th>
                        <th className="text-left py-3 px-2 font-medium text-gray-700">Contact</th>
                        <th className="text-left py-3 px-2 font-medium text-gray-700">Niveau</th>
                        <th className="text-left py-3 px-2 font-medium text-gray-700">Matière</th>
                        <th className="text-left py-3 px-2 font-medium text-gray-700">Action</th>
                        <th className="text-left py-3 px-2 font-medium text-gray-700">Statut</th>
                        <th className="text-left py-3 px-2 font-medium text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {parentRequests.map((request) => (
                        <tr key={request.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-2 text-sm text-gray-600">
                            {formatDate(request.created_at)}
                          </td>
                          <td className="py-3 px-2 text-sm font-medium">
                            {request.requester_first_name} {request.requester_last_name}
                          </td>
                          <td className="py-3 px-2 text-sm text-gray-600">
                            <div className="flex flex-col">
                              <span className="flex items-center gap-1">
                                <Mail className="h-3 w-3" />
                                {request.requester_email}
                              </span>
                              <span className="flex items-center gap-1">
                                <Phone className="h-3 w-3" />
                                {request.requester_phone}
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-2 text-sm text-gray-600">
                            {request.student_level}
                          </td>
                          <td className="py-3 px-2 text-sm text-gray-600">
                            {request.subject}
                          </td>
                          <td className="py-3 px-2 text-sm text-gray-600">
                            {request.action_choice === 'call' ? (
                              <span className="flex items-center gap-1 text-orange-600">
                                <Phone className="h-3 w-3" />
                                Appel
                              </span>
                            ) : (
                              <span className="flex items-center gap-1 text-blue-600">
                                <GraduationCap className="h-3 w-3" />
                                Professeur
                              </span>
                            )}
                          </td>
                          <td className="py-3 px-2">
                            {getStatusBadge(request.status, 'parent')}
                          </td>
                          <td className="py-3 px-2">
                            <div className="flex gap-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => setSelectedParentRequest(request)}
                                  >
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl">
                                  <DialogHeader>
                                    <DialogTitle>Détails de la demande</DialogTitle>
                                  </DialogHeader>
                                  {selectedParentRequest && (
                                    <div className="space-y-4">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <label className="font-medium">Demandeur</label>
                                          <p>{selectedParentRequest.requester_first_name} {selectedParentRequest.requester_last_name}</p>
                                        </div>
                                        <div>
                                          <label className="font-medium">Email</label>
                                          <p>{selectedParentRequest.requester_email}</p>
                                        </div>
                                        <div>
                                          <label className="font-medium">Téléphone</label>
                                          <p>{selectedParentRequest.requester_phone}</p>
                                        </div>
                                        <div>
                                          <label className="font-medium">Pour qui</label>
                                          <p>{selectedParentRequest.is_for_self ? 'Pour lui-même' : 'Pour une autre personne'}</p>
                                        </div>
                                        {!selectedParentRequest.is_for_self && (
                                          <>
                                            <div>
                                              <label className="font-medium">Élève</label>
                                              <p>{selectedParentRequest.student_first_name} {selectedParentRequest.student_last_name}</p>
                                            </div>
                                            <div>
                                              <label className="font-medium">Relation</label>
                                              <p>{selectedParentRequest.relationship || 'Non renseignée'}</p>
                                            </div>
                                            {selectedParentRequest.student_phone && (
                                              <div>
                                                <label className="font-medium">Téléphone élève</label>
                                                <p>{selectedParentRequest.student_phone}</p>
                                              </div>
                                            )}
                                            {selectedParentRequest.student_email && (
                                              <div>
                                                <label className="font-medium">Email élève</label>
                                                <p>{selectedParentRequest.student_email}</p>
                                              </div>
                                            )}
                                          </>
                                        )}
                                        <div>
                                          <label className="font-medium">Niveau</label>
                                          <p>{selectedParentRequest.student_level}</p>
                                        </div>
                                        <div>
                                          <label className="font-medium">Matière</label>
                                          <p>{selectedParentRequest.subject}</p>
                                        </div>
                                        <div>
                                          <label className="font-medium">Action souhaitée</label>
                                          <p>{selectedParentRequest.action_choice === 'call' ? 'Appel' : 'Choisir professeur'}</p>
                                        </div>
                                      </div>
                                      <div>
                                        <label className="font-medium">Description des besoins</label>
                                        <p className="mt-1 p-3 bg-gray-50 rounded-md">
                                          {selectedParentRequest.needs_description}
                                        </p>
                                      </div>
                                    </div>
                                  )}
                                </DialogContent>
                              </Dialog>
                              
                              {request.status === 'pending' && (
                                <Button
                                  size="sm"
                                  onClick={() => updateParentRequestStatus(request.id, 'processing')}
                                  className="bg-blue-600 hover:bg-blue-700"
                                >
                                  <Clock className="h-4 w-4 mr-1" />
                                  Traiter
                                </Button>
                              )}
                              
                              {request.status === 'processing' && (
                                <Button
                                  size="sm"
                                  onClick={() => updateParentRequestStatus(request.id, 'completed')}
                                  className="bg-green-600 hover:bg-green-700"
                                >
                                  <CheckCircle className="h-4 w-4 mr-1" />
                                  Terminer
                                </Button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tab Candidatures Professeurs */}
          <TabsContent value="teachers" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  Candidatures des professeurs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-2 font-medium text-gray-700">Date</th>
                        <th className="text-left py-3 px-2 font-medium text-gray-700">Professeur</th>
                        <th className="text-left py-3 px-2 font-medium text-gray-700">Contact</th>
                        <th className="text-left py-3 px-2 font-medium text-gray-700">Matières</th>
                        <th className="text-left py-3 px-2 font-medium text-gray-700">Heures/sem</th>
                        <th className="text-left py-3 px-2 font-medium text-gray-700">Tarif</th>
                        <th className="text-left py-3 px-2 font-medium text-gray-700">Statut</th>
                        <th className="text-left py-3 px-2 font-medium text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teacherApplications.map((application) => (
                        <tr key={application.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-2 text-sm text-gray-600">
                            {formatDate(application.created_at)}
                          </td>
                          <td className="py-3 px-2 text-sm font-medium">
                            {application.teacher_name}
                          </td>
                          <td className="py-3 px-2 text-sm text-gray-600">
                            <div className="flex flex-col">
                              <span className="flex items-center gap-1">
                                <Mail className="h-3 w-3" />
                                {application.teacher_email}
                              </span>
                              <span className="flex items-center gap-1">
                                <Phone className="h-3 w-3" />
                                {application.teacher_phone}
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-2 text-sm text-gray-600">
                            {Array.isArray(application.subjects) ? application.subjects.join(', ') : application.subject}
                          </td>
                          <td className="py-3 px-2 text-sm text-gray-600">
                            {application.hours_per_week}h
                          </td>
                          <td className="py-3 px-2 text-sm text-gray-600">
                            {application.hourly_rate}€/h
                          </td>
                          <td className="py-3 px-2">
                            {getStatusBadge(application.status, 'teacher')}
                          </td>
                          <td className="py-3 px-2">
                            <div className="flex gap-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => setSelectedTeacherApplication(application)}
                                  >
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-2xl">
                                  <DialogHeader>
                                    <DialogTitle>Détails de la candidature</DialogTitle>
                                  </DialogHeader>
                                  {selectedTeacherApplication && (
                                    <div className="space-y-4">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div>
                                          <label className="font-medium">Professeur</label>
                                          <p>{selectedTeacherApplication.teacher_name}</p>
                                        </div>
                                        <div>
                                          <label className="font-medium">Email</label>
                                          <p>{selectedTeacherApplication.teacher_email}</p>
                                        </div>
                                        <div>
                                          <label className="font-medium">Téléphone</label>
                                          <p>{selectedTeacherApplication.teacher_phone}</p>
                                        </div>
                                        <div>
                                          <label className="font-medium">Matières</label>
                                          <p>{Array.isArray(selectedTeacherApplication.subjects) ? selectedTeacherApplication.subjects.join(', ') : selectedTeacherApplication.subject}</p>
                                        </div>
                                        <div>
                                          <label className="font-medium">Parcours/Compétences</label>
                                          <p className="mt-1 p-3 bg-gray-50 rounded-md">
                                            {selectedTeacherApplication.background_description || 'Non renseigné'}
                                          </p>
                                        </div>
                                        <div>
                                          <label className="font-medium">Heures/semaine</label>
                                          <p>{selectedTeacherApplication.hours_per_week}h</p>
                                        </div>
                                        <div>
                                          <label className="font-medium">Tarif horaire</label>
                                          <p>{selectedTeacherApplication.hourly_rate}€/h</p>
                                        </div>
                                      </div>
                                      <div>
                                        <label className="font-medium">Créneaux disponibles</label>
                                        <p className="mt-1 p-3 bg-gray-50 rounded-md">
                                          {selectedTeacherApplication.availability_schedule}
                                        </p>
                                      </div>
                                    </div>
                                  )}
                                </DialogContent>
                              </Dialog>
                              
                              {application.status === 'pending' && (
                                <>
                                  <Button
                                    size="sm"
                                    onClick={() => updateTeacherApplicationStatus(application.id, 'approved')}
                                    className="bg-green-600 hover:bg-green-700"
                                  >
                                    <CheckCircle className="h-4 w-4 mr-1" />
                                    Approuver
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="destructive"
                                    onClick={() => updateTeacherApplicationStatus(application.id, 'rejected')}
                                  >
                                    <XCircle className="h-4 w-4 mr-1" />
                                    Refuser
                                  </Button>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default GestionPage;
